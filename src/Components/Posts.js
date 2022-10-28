

const post = (itemInfo) => {
    return <div className="post">
        <div className="post-item"> Post: {itemInfo.title}</div>
        <div className="post-item">Author: {itemInfo.author.username}</div>
        <div className="post-item">Price: {itemInfo.price}</div>
        <div className="post-item">Location: {itemInfo.location}</div>
        <div className= "post-item description">Description: {itemInfo.description}</div>
        <div></div>
    </div>
    }


const Posts =  (props) => {


    
    const response = props.posts;
    console.log(response);
    
    return <div className="posts"> {
        response.reverse().map((item)=> {return post(item)})
    }</div>


}

export default Posts

