import React, { useEffect, useState } from "react";
import './styles.css'
import { db, timeStamp } from "../firebase";
import { transformToDate } from "../toDate";
import { useAuth } from "../routings/AuthService";

const App = () => {
  const [memo, setMemo] = useState('');
  const [dataset, setDataset] = useState([])
  const { user, logout } = useAuth();

  const onsubmit = async () => {
    try {
      const newMemo = await db.collection('memo').add({ text: memo, timestamp: timeStamp, userId: user.uid })
      console.log('create memo!', newMemo);
    } catch (e) {
      console.error('Error adding document:', e)
    } finally {
      getMemo();
      setMemo('');
    }
  }

  const getMemo = async () => {
    const initMemo = [];
    await db.collection('memo').where('userId', '==', `${user.uid}`).orderBy('timestamp', 'desc').get().then((snapshot) => snapshot.docs.forEach(doc => {
      initMemo.push({ id: doc.id, ...doc.data({ serverTimestamps: "estimate" }) })
    }))
    transformToDate(initMemo);
    setDataset(initMemo);
  };

  const onDelete = async (id) => {
    try {
      await db.collection('memo').doc(id).delete();
    } catch (e) {
      console.error('Error delete document:', e)
    } finally {
      getMemo()
    }
  };

  useEffect(() => {
    getMemo()

  }, [dataset]);

  return (
    <section className="c-selection">
      <div className="c-box">
        <div className="memo-list">
          <p>{user.email}</p>
          <button onClick={() => logout()}>ログアウト</button>
          {!dataset[0] ? <p>メモを書いてみよう!</p> :
            <>
              {dataset.map((m) => {
                return (
                  <div key={m.id} className="memo">
                    <p>{m.text}</p>
                    <p>{m.timestamp}</p>
                    <button
                      className="delete-button"
                      onClick={() => onDelete(m.id)}>X</button>
                  </div>

                );
              })}
            </>
          }
        </div>
        <div className="submit-memo">
          <input
            className="text-input"
            value={memo}
            onChange={e => setMemo(e.target.value)} />
          <button onClick={onsubmit}>送信</button>
        </div>
      </div>
    </section>
  );
}

export default App;
