import { collection, query, orderBy } from 'firebase/firestore';
import { db } from "../firebase";
import { useCollection } from 'react-firebase-hooks/firestore';
import Post from './Post';
const Posts = () => {
    const [value, loading, error] = useCollection(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        {
        snapshotListenOptions: { includeMetadataChanges: true },
        }
    );
    return ( 
        <div>
            {value&&value.docs.map(d=>{
                return(
                    <Post 
                        key={d.id}
                        name={d.data().name}
                        message = {d.data().message}
                        email = {d.data().email}
                        timestamp = {d.data().timestamp}
                        image = {d.data().image}
                        postImage = {d.data().postImage}
                    />
                )
            })}
        </div>
    );
}

export default Posts;