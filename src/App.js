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

    const fetchEmployees = async () => {
        setLoading(true);
        try {
            await API.search().them((res) => {
                console.log(res);
                setEmployees(
                    res.data.results.map((e, i) => ({
                        firstName: e.name.first,
                        lastName: e.name.last,
                        picture: e.picture.large,
                        email: e.email,
                        phone: e.phone,
                        city: e.location.city,
                        key: i,
                    }))
                );
                setSearchResults(
                    res.data.results.map((e, i) => ({
                        firstName: e.name.first,
                        lastName: e.name.last,
                        picture: e.picture.large,
                        email: e.email,
                        phone: e.phone,
                        city: e.location.city,
                        key: i,
                    }))
                );
            });
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };
}
