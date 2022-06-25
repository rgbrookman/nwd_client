import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createYearAction, updateYearAction, listYears } from '../../actions/yearActions';
import Loading from '../../components/Loading';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Button } from 'react-bootstrap';
import './year.css';
import axios from "axios";

export default function UpdateYearScreen({ history }) {
  const [yourName, setYourName] = useState();
  const [birthDate, setBirthDate] = useState();
  const [myValues_1, setMyValues_1] = useState();
  const [myValues_1_Text, setMyValues_1_Text] = useState();
  const [myValues_2, setMyValues_2] = useState();
  const [myValues_2_Text, setMyValues_2_Text] = useState();
  const [myValues_3, setMyValues_3] = useState();
  const [myValues_3_Text, setMyValues_3_Text] = useState();
  const [myValues_4, setMyValues_4] = useState();
  const [myValues_4_Text, setMyValues_4_Text] = useState();
  const [myValues_5, setMyValues_5] = useState();
  const [myValues_5_Text, setMyValues_5_Text] = useState();
  const [myVision_1, setMyVision_1] = useState();
  const [myVision_2, setMyVision_2] = useState();
  const [myVision_3, setMyVision_3] = useState();
  const [myVision_4, setMyVision_4] = useState();
  const [myVision_5, setMyVision_5] = useState();
  const [whyNWD, setWhyNWD] = useState();
  const [myIkigai, setMyIkigai] = useState();
  const [navigationalQuote, setNavigationalQuote] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  const yearUpdate = useSelector((state) => state.yearUpdate);
  const { success: successUpdate } = yearUpdate;

//   const deleteHandler = (id) => {
//   if (window.confirm("Are you sure?")) {
//     dispatch(deleteNoteAction(id));
//   }
//   history.push("/mynotes");
// };

const resetHandler = () => {
  setYourName(yourName);
setBirthDate(birthDate);
setMyValues_1(myValues_1);
setMyValues_1_Text(myValues_1_Text);
setMyValues_2(myValues_2);
setMyValues_2_Text(myValues_2_Text);
setMyValues_3(myValues_3);
setMyValues_3_Text(myValues_3_Text);
setMyValues_4(myValues_4);
setMyValues_4_Text(myValues_4_Text);
setMyValues_5(myValues_5);
setMyValues_5_Text(myValues_5_Text);
setMyVision_1(myVision_1);
setMyVision_2(myVision_2);
setMyVision_3(myVision_3);
setMyVision_4(myVision_4);
setMyVision_5(myVision_5);
setWhyNWD(whyNWD);
setMyIkigai(myIkigai);
setNavigationalQuote(navigationalQuote);
};

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/years/year/${id}`);
      setYourName(data.yourName);
setBirthDate(data.birthDate);
setMyValues_1(data.myValues_1);
setMyValues_1_Text(data.myValues_1_Text);
setMyValues_2(data.myValues_2);
setMyValues_2_Text(data.myValues_2_Text);
setMyValues_3(data.myValues_3);
 setMyValues_3_Text(data.myValues_3_Text);
setMyValues_4(data.myValues_4);
 setMyValues_4_Text(data.myValues_4_Text);
 setMyValues_5(data.myValues_5);
 setMyValues_5_Text(data.myValues_5_Text);
setMyVision_1(data.myVision_1);
setMyVision_2(data.myVision_2);
    setMyVision_3(data.myVision_3);
 setMyVision_4(data.myVision_4);
 setMyVision_5(data.myVision_5);
 setWhyNWD(data.whyNWD);
 setMyIkigai(data.myIkigai);
setNavigationalQuote(data.navigationalQuote);
    };

    fetching();

  }, [id,  yourName,
     birthDate,
     myValues_1,
     myValues_1_Text,
     myValues_2,
     myValues_2_Text,
     myValues_3,
     myValues_3_Text,
     myValues_4,
     myValues_4_Text,
     myValues_5,
     myValues_5_Text,
     myVision_1,
     myVision_2,
     myVision_3,
     myVision_4,
     myVision_5,
     whyNWD,
     myIkigai,
     navigationalQuote]);

 const updateHandler = (e) => {
   e.preventDefault();
   dispatch(updateYearAction(id,
     yourName,
     birthDate,
     myValues_1,
     myValues_1_Text,
     myValues_2,
     myValues_2_Text,
     myValues_3,
     myValues_3_Text,
     myValues_4,
     myValues_4_Text,
     myValues_5,
     myValues_5_Text,
     myVision_1,
     myVision_2,
     myVision_3,
     myVision_4,
     myVision_5,
     whyNWD,
     myIkigai,
     navigationalQuote));

   navigate("/today");
 };

  return (
<form onSubmit={updateHandler}>

    <main id="yearContainer">
    <div className="yearMap">

    <div className="nameBox">
    <h4>My Name is...</h4>
         <input
          type="text"
          value={yourName}
          onChange={(e) => setYourName(e.target.value)}
        />



    </div>

    <div className="visionBox">
    <h4>My vision for 2022 is...</h4>

    <input
      type="text"
      value={myVision_1}
      placeholder="Vision 1"
      onChange={(e) => setMyVision_1(e.target.value)}
    />
    <input
      type="text"
      value={myVision_2}
      placeholder="Vision 2"
      onChange={(e) => setMyVision_2(e.target.value)}
    />
    <input
      type="text"
      value={myVision_3}
      placeholder="Vision 3"
      onChange={(e) => setMyVision_3(e.target.value)}
    />
    <input
      type="text"
      value={myVision_4}
      placeholder="Vision 4"
      onChange={(e) => setMyVision_4(e.target.value)}
    />
    <input
      type="text"

      value={myVision_5}
      placeholder="Vision 5"
      onChange={(e) => setMyVision_5(e.target.value)}
    />
</div>
<div className="memoryBox">
<h4>Memory that you wanted to remember</h4>

</div>
    <div className="quoteBox">
    <h4>This weeks navigational quote is...</h4>
    <input
      type="text"
      value={navigationalQuote}
      placeholder=""
      onChange={(e) => setNavigationalQuote(e.target.value)}
    />

    </div>
    <div className="dobBox">
    <h4>I was born on...</h4>
    <input
      type="date"
      value={birthDate}
      onChange={(e) => setBirthDate(e.target.value)}
    />

    </div>
    <div className="whyBox">
    <h4>I want to have No Wasted Days because...</h4>
    <textarea
      type="text"
      value={whyNWD}
      rows="8"
      cols="40"
      onChange={(e) => setWhyNWD(e.target.value)}
    />

    </div>
    <div className="valuesBox">
    <h4>My personal values are...</h4>
    <div className="valuesIntBox">
    <input
      type="text"
      value={myValues_1}
      placeholder=""
      onChange={(e) => setMyValues_1(e.target.value)}
    />
    <input
      type="text"
      value={myValues_1_Text}
      placeholder=""
      onChange={(e) => setMyValues_1_Text(e.target.value)}
    />
      </div>
        <div className="valuesIntBox">
    <input
      type="text"
      value={myValues_2}
      placeholder=""
      onChange={(e) => setMyValues_2(e.target.value)}
    />
    <input
      type="text"
      value={myValues_2_Text}
      placeholder=""
      onChange={(e) => setMyValues_2_Text(e.target.value)}
    />
</div>
      <div className="valuesIntBox">
    <input
      type="text"
      value={myValues_3}
      placeholder=""
      onChange={(e) => setMyValues_3(e.target.value)}
    />
    <input
      type="text"
      value={myValues_3_Text}
      placeholder=""
      onChange={(e) => setMyValues_3_Text(e.target.value)}
    />
</div>
      <div className="valuesIntBox">
    <input
      type="text"
      value={myValues_4}
      placeholder=""
      onChange={(e) => setMyValues_4(e.target.value)}
    />
    <input
      type="text"
      value={myValues_4_Text}
      placeholder=""
      onChange={(e) => setMyValues_4_Text(e.target.value)}
    />
</div>
      <div className="valuesIntBox">
    <input
      type="text"
      value={myValues_5}
      placeholder=""
      onChange={(e) => setMyValues_5(e.target.value)}
    />
    <input
      type="text"
      value={myValues_5_Text}
      placeholder=""
      onChange={(e) => setMyValues_5_Text(e.target.value)}
    />
</div>
    </div>
    <div className="ikigaiBox">
    <h4>My ikigia is...</h4>
    <input
      type="text"
      value={myIkigai}
      placeholder=""
      onChange={(e) => setMyIkigai(e.target.value)}
    />

    </div>
        <div className="buttonBox">
        <Button className="submitYearButton" type="submit">
          Update
        </Button>
          </div>
    </div>

    </main>

    </form>
  );
}
