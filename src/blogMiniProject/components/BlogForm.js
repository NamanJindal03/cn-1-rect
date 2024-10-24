import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function BlogForm({addBlog}) {
    const [title, setTitle] = useState({data: '', error: ''});
    const [content, setContent] = useState({data: '', error: ''})

    function handleBlogAddition(){
        //perform validation
        let isError = false;
        if(!title.data){
            isError = true;
            setTitle({...title, error: 'Cannot be null'})
        }
        if(content.data.length < 10){
            
            isError = true;
            setContent({...content, error: 'Length should be greater than 10'})
        }

        if(isError){
            return;
        }
        const id = uuidv4();
        addBlog({title: title.data, content: content.data, id})
        setContent({data: '', error: ''});
        setTitle({data: '', error: ''})
    }

  return (
    <div style={{border: '2px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '15px', padding: '15px'}}>
        <div style={{display: "flex", flexDirection: 'column'}}>
            <label>Title</label>
            <input type="text" value={title.data} onChange={(e)=> setTitle({...title, data: e.target.value, error: ''})} />
            {title.error ? <span style={{color: 'red'}}>{title.error}</span> : null}
        </div>
        <div style={{display: "flex", flexDirection: 'column'}}>
            <label>Content</label>
            <input type="text" value={content.data} onChange={(e)=> setContent({...content, data: e.target.value, error: ''})} />
            {content.error ? <span style={{color: 'red'}}>{content.error}</span> : null}
        </div>
        <button onClick={handleBlogAddition} style={{width: '100px'}}>ADD</button>
    </div>
  )
}
