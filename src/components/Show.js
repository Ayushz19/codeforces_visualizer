import React, {useState} from 'react';
import styles from './styles.module.scss'
import Display from '../components/Display/Display'




function Show()
{
    const [userName,setUserName]=useState("");
    const[data,setData] = useState({});

const onChangeHandler =(e)=>{
    setUserName(e.target.value)
}
const onSubmitHandler = (e)=>{
    e.preventDefault();
    fetch(`https://codeforces.com/api/user.info?handles=${userName}`)
    .then((response)=>{
        return response.json();
    }).then((originalData)=>{
        if(originalData){
            setData(originalData);
        }
    })
}

return(
    <>
    <div className={styles.container}>
<form id="myform" autoComplete='off' onSubmit={onSubmitHandler}>
    <input className={styles.in} type={userName} id="w" onChange={onChangeHandler} />
    <button className={styles.search}>Search</button> 
</form>

    </div>
    <Display data={data} />
    </>
)
}

export default Show;
