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

    useEffect(() => {
        fetchEmployees();
    }, []);

    const searchHandler = (search) => {
        console.log("Search", search);
        setSearch(search);

        if (search !== "") {
            const newEmployeeList = employees.filter((employee) => {
                return (
                    Object.values(employee)
                    .toLowerCase()
                    .includes(search.toLowerCase())
                );
            });
            setSearchResults(newEmployeeList);
        } else {
            setSearchResults(employees);
        }
    };

    useEffect(() => {
        const getAllEmployees = async () => {
            const allEmployees = await fetchEmployees();
            if (allEmployees) setEmployees(allEmployees);
        };
        getAllEmployees();
    }, []);

    useEffect(() => {}, [Employees]);

    if (loading) {
        return (
            <Wrapper>
                <Loading />
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <div className = "container">
                <div className = "row">
                    <Col size = "md-4">
                        <h2>Employee Directory</h2>

                        <SearchForm
                        searchKeyword = {searchHandler}
                        term = {search}
                         />
                    </Col>
                </div>

                <div className = "row">
                    <Col size = "md-12">
                        <table clawsName = "table">
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                        </table>
                    </Col>
                </div>
            </div>
        </Wrapper>
    )
}
