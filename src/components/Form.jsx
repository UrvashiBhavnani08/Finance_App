import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import data from "../currency_symbol.json";
import axios from "axios";
const Form = () => {
  const [name, setname] = useState("");
  const [emails, setemails] = useState([{ type: "", email: "" }]);
  const [phones, setphones] = useState([{ type: "", phone: "" }]);
  const [address, setaddress] = useState("");
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [clientname, setclientname] = useState("");
  const [companytype, setcompanytype] = useState("");
  const [industrytype, setindustrytype] = useState("");
  const [website, setwebsite] = useState("");
  const [emailtypes, setemailtypes] = useState([]);
  const [phonetypes, setphonetypes] = useState([]);
  const [company_tobeadded, setcompanytobeadded] = useState("");
  const [base_currencysymbol, setbase_currencysymbol] = useState("");
  const [formal_name, setformal_name] = useState("");
  const [suffix_symbol, setsuffix_symbol] = useState("");
  const [amount_millions, setamount_millions] = useState("");
  const [decimal_places, setdecimal_places] = useState("");
  const [word_decimal, setword_decimal] = useState("");

  const { id } = useParams();
  console.log(id);

  console.log(data);

  useEffect(() => {
    const updateHandler = async () => {
      const resp = await axios.post(
        `http://localhost:8000/getcompanydata/${id}`
      );
      const {
        address,
        client_name,
        company_name,
        company_type,
        industry_type,
        company_tobeadded,
        country,
        state,
        website,
        decimal_places,
        amount_millions,
        base_currencysymbol,
        suffix_symbol,
      } = resp.data[0];
      const { email, phone } = resp.data[0];
      const emailobj = JSON.parse(email);
      const phoneobj = JSON.parse(phone);
      setaddress(address);
      setclientname(client_name);
      setcompanytype(company_type);
      setname(company_name);
      setindustrytype(industry_type);
      setcountry(country);
      setstate(state);
      setwebsite(website);
      setemails(emailobj);
      setphones(phoneobj);
      setcompanytobeadded(company_tobeadded);
      setdecimal_places(decimal_places);
      setword_decimal(word_decimal);
      setamount_millions(amount_millions);
      setbase_currencysymbol(base_currencysymbol);
      setsuffix_symbol(suffix_symbol);
    };
    if (id !== undefined) {
      updateHandler();
    }
  }, [id]);

  const handleClick = async () => {
    const data = {
      company_name: name,
      email: JSON.stringify(emails),
      client_name: clientname,
      company_type: companytype,
      industry_type: industrytype,
      address: address,
      company_tobeadded,
      country,
      state,
      website,
      phone: JSON.stringify(phones),
      formal_name,
      decimal_places,
      word_decimal,
      amount_millions,
      base_currencysymbol,
      suffix_symbol,
    };
    if (id === undefined) {
      const resp = await axios.post("http://localhost:8000/insert", data);
      console.log(resp);
    } else {
      const resp = await axios.post(
        `http://localhost:8000/updatedetails/${id}`,
        data
      );
      console.log(resp);
    }
  };
  const handleemailchange = (email, index) => {
    let emailvalues = [...emails];
    emailvalues[index].type = emailtypes[index];
    emailvalues[index].email = email;
    setemails(emailvalues);
  };
  const handlephonechange = (phone, index) => {
    let phonevalues = [...phones];
    phonevalues[index].type = phonetypes[index];
    phonevalues[index].phone = phone;
    setphones(phonevalues);
  };
  const handleaddemails = () => {
    setemails([...emails, { type: "", email: "" }]);
  };
  const handleaddphones = () => {
    setphones([...phones, { type: "", phone: "" }]);
  };
  const handlechangetype = (type) => {
    setemailtypes([...emailtypes, type]);
  };
  const handlechangetype2 = (type) => {
    setphonetypes([...phonetypes, type]);
  };

  const handlecurrency = (obj) => {
    const currobj = JSON.parse(obj);
    console.log(currobj);
    setformal_name(currobj.currency);
    setbase_currencysymbol(currobj.abr);
    setsuffix_symbol(currobj.abr);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label htmlFor="">CompanyName</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        ></input>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label htmlFor="">Website</label>
        <input
          type="text"
          value={website}
          onChange={(e) => setwebsite(e.target.value)}
        ></input>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label htmlFor="">set emails and their type:</label>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {emails.map((element, ind) => {
            return (
              <Box key={ind}>
                <select
                  name="type"
                  onChange={(e) => handlechangetype(e.target.value)}
                >
                  <option value="select type of emails">SELECT</option>
                  <option value="WORK">WORK</option>
                  <option value="HOME">HOME</option>
                </select>
                <input
                  type="email"
                  value={element.email || ""}
                  onChange={(e) => handleemailchange(e.target.value, ind)}
                ></input>
              </Box>
            );
          })}
          <Button onClick={() => handleaddemails()}>
            Add Emails and their type
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label htmlFor="">address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
        ></input>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label htmlFor="">country</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setcountry(e.target.value)}
        ></input>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label htmlFor="">city</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setcity(e.target.value)}
        ></input>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label htmlFor="">state</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setstate(e.target.value)}
        ></input>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label htmlFor="">compaytype</label>
        <input
          type="text"
          value={companytype}
          onChange={(e) => setcompanytype(e.target.value)}
        ></input>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label htmlFor="">company in which it is to be added </label>
        <select
          name="type"
          onChange={(e) => setcompanytobeadded(e.target.value)}
        >
          <option value="select">SELECT</option>
          <option value="DigitalIpsum">Digital Ipsum</option>
          <option value="SuperDolphins">Super Dolphins</option>
        </select>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label htmlFor="">clientname</label>
        <input
          type="text"
          value={clientname}
          onChange={(e) => setclientname(e.target.value)}
        ></input>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label htmlFor="">industrytype</label>
        <input
          type="text"
          value={industrytype}
          onChange={(e) => setindustrytype(e.target.value)}
        ></input>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label htmlFor="">set phone number and their type:</label>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {phones?.map((element, ind) => {
            return (
              <Box key={ind}>
                <select
                  name="type"
                  onChange={(e) => handlechangetype2(e.target.value)}
                >
                  <option value="select type of emails">SELECT</option>
                  <option value="WORK">WORK</option>
                  <option value="HOME">HOME</option>
                </select>
                <input
                  type="email"
                  value={element.phone || ""}
                  onChange={(e) => handlephonechange(e.target.value, ind)}
                ></input>
              </Box>
            );
          })}
          <Button onClick={() => handleaddphones()}>
            Add Number and their types
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label htmlFor="">select your currency </label>
        <select name="type" onChange={(e) => handlecurrency(e.target.value)}>
          <option value="select">SELECT</option>
          {data.map((curr, ind) => {
            return (
              <option
                value={JSON.stringify({
                  currency: curr.currency,
                  abr: curr.abbreviation,
                })}
                key={ind}
              >
                {curr.currency}
              </option>
            );
          })}
        </select>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label htmlFor="">Decimal Places</label>
        <input
          type="text"
          value={decimal_places}
          onChange={(e) => setdecimal_places(e.target.value)}
        ></input>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label htmlFor="">word decimal</label>
        <input
          type="text"
          value={word_decimal}
          onChange={(e) => setword_decimal(e.target.value)}
        ></input>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label htmlFor="">Amount in millions ?</label>
        <select
          name="type"
          onChange={(e) => setamount_millions(e.target.value)}
        >
          <option value="select">SELECT</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
      </Box>

      <Button onClick={() => handleClick()}>Submit form</Button>
      <h1>&#76;&#101;&#107;</h1>
    </Box>
  );
};

export default Form;
