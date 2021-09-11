import React, { useState, useEffect } from "react";
import EmployeeCard from "./components/EmployeeCard";
import SearchForm from "./components/SearchForm";
import Wrapper from "./components/Wrapper";
import Col from "./components/Col";
import Lopading from "./components/Loading";
import API from "./utils/API";
import "./App.css";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [empoyees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
}