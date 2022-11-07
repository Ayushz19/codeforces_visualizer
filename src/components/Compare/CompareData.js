import React,{useState} from 'react';
import Compare from './Compare';
import style2 from './style2.module.scss'




function CompareData() {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState([]);
  const [userName2, setUserName2]=useState("")

  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const onChangeHandler2 =(e)=>{
    setUserName2(e.target.value)
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`https://codeforces.com/api/user.info?handles=${userName};${userName2}`)
      .then((response) => {
        return response.json();
      })
      .then((originalData) => {
        if (originalData) {
          setData(originalData.result);
        }
      });
  };

  return (
    <>
      <div className={style2.container}>
        <form id="myform" autoComplete="off" onSubmit={onSubmitHandler}>
          <input
            className={style2.in}
            type={userName}
            placeholder="type username"
            onChange={onChangeHandler}
          />
          <div className={style2.button}>
            <button className={style2.search}>Search</button>
          </div>
          <div className={style2.input2}>
            <input
              className={style2.in}
              type={userName2}
              placeholder="type username"
              onChange={onChangeHandler2}
            />
          </div>
        </form>
      </div>
      <Compare data={data} />
    </>
  );
}

export default CompareData;
