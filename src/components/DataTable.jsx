import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const DataTable = () => {
  const [rows, setrows] = useState([]);
  const [search, setSearch] = useState("");
  const [update, setupdate] = useState(true);

  const handleDelete = async (id) => {
    const resp = await axios.post("http://localhost:8000/deletedata", { id });
    console.log(resp);
    setupdate(!update);
  };
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.post("http://localhost:8000/getdata");
      console.log(resp.data);
      let finalar = [];
      for (let i = 0; i < resp.data.length; i++) {
        const { email, phone, ...rest } = resp.data[i];
        const emailobj = JSON.parse(email);
        const phoneobj = JSON.parse(phone);
        console.log(rest);
        finalar.push({
          ...rest,
          email: emailobj,
          phone: phoneobj,
        });
      }
      if (search === "") setrows([...finalar]);
      else {
        const finaldata = finalar?.filter((company) => {
          return company.company_name.includes(search);
        });
        setrows(finaldata);
      }
    };
    getData();
  }, [search, update]);
  console.log(rows);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "company_name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "client_name",
      headerName: "Client name",
      width: 150,
      editable: true,
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
      editable: true,
    },
    {
      field: "country",
      headerName: "country",
      width: 150,
      editable: true,
    },
    {
      field: "website",
      headerName: "website",
      width: 150,
      editable: true,
    },
    {
      field: "state",
      headerName: "state",
      width: 150,
      editable: true,
    },
    {
      field: "industry_type",
      headerName: "Industry type",
      width: 150,
      editable: true,
    },
    {
      field: "created",
      headerName: "Created at",
      width: 150,
      editable: true,
    },
    {
      field: "updated",
      headerName: "Updated At",
      width: 150,
      editable: true,
    },
    {
      field: "company_tobeadded",
      headerName: "Company to be added",
      width: 150,
      editable: true,
    },
    {
      field: "Print",
      renderCell: (cellValues) => {
        return (
          <>
            <Link to={`/update/${cellValues.id}`}>Update</Link>
            <Link onClick={() => handleDelete(cellValues.id)}>Delete</Link>
          </>
        );
      },
    },
  ];
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search for company name"
      ></input>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
};

export default DataTable;
