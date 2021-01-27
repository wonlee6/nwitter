import Nweet from 'components/Nweet';
import NweetFactory from 'components/NweetFactory';
import { dbService } from 'fbase';
import React, { useEffect, useState } from 'react';

// userObj는 router의해 받음
const Home = ({ userObj }) => {
  //console.log(userObj);
  const [nweets, setNweets] = useState([]);
  //   const getNweets = async () => {
  //     const dbNweets = await dbService.collection('nweets').get();
  //     dbNweets.forEach((document) => {
  //       const nweetObject = {
  //         ...document.data(),
  //         id: document.id,
  //       };
  //       setNweets((prev) => [nweetObject, ...prev]);
  //     });
  //   };
  useEffect(() => {
    dbService.collection('nweets').onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
      //console.log(nweetArray);
    });
  }, []);

  return (
    <div className="container">
      <NweetFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
