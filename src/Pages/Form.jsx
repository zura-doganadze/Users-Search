import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

import styled from "styled-components";
import Header from "../Components/Header";
//data
import userData from "../userData.json";

//img
import FilterImg from "../Images/Form/filter-svg.svg";
import search from "../Images/Form/search.svg";
import UserIBackground from "../Images/Header/imgBackground.png";

function Form() {
  const location = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const Titlesdata = [
    "სტუდენტის სახელი და გვარი",
    "სტატუსი",
    "სქესი",
    "ქულები",
    "პირადი ნომერი",
    "მობილურის ნომერი",
    "მისამართი",
    "დაბადების თარიღი",
    "მაილი",
  ];

  useEffect(() => {
    if (location.state == null) {
      navigate("/Registration");
    }
  }, []);

  const [users, setUsers] = useState(userData);

  const [filters, setFilters] = useState({
    active: true,
    inactive: true,
    male: true,
    female: true,
  });

  function toggleFilter(filterKey) {
    setFilters({
      ...filters,
      [filterKey]: !filters[filterKey],
    });
  }

  useEffect(() => {
    const filteredUsers = userData.filter((user) => {
      return (
        (((filters.active && user.active) ||
          (filters.inactive && !user.active)) &&
          filters.male &&
          user.gender === "male") ||
        (filters.female && user.gender === "female")
      );
    });
    setUsers(filteredUsers);
  }, [filters]);

  function HendlFilter() {
    setFilters(!filters);
  }

  const pages = [1, 2, 3, 4];
  return (
    <Wrapper>
      <Header />
      <FormCWrapper>
        <div>
          <Container>
            {filters ? (
              <Filterssection>
                <FilterDetailsC>
                  <ActiveCWrapper>
                    <h3>სტუდენტის სტატუსი</h3>
                    <FilterTopics>
                      <input
                        type="checkbox"
                        checked={filters.active}
                        onChange={() => toggleFilter("active")}
                      />
                      <span>active</span>
                    </FilterTopics>
                    <FilterTopics>
                      <input
                        type="checkbox"
                        checked={filters.inactive}
                        onChange={() => toggleFilter("inactive")}
                      />
                      <span>inactive</span>
                    </FilterTopics>
                  </ActiveCWrapper>
                  <ActiveCWrapper>
                    <h3>სქესი</h3>
                    <FilterTopics>
                      <input
                        type="checkbox"
                        checked={filters.male}
                        onChange={() => toggleFilter("male")}
                      />{" "}
                      <span>male</span>
                    </FilterTopics>
                    <FilterTopics>
                      <input
                        type="checkbox"
                        checked={filters.female}
                        onChange={() => toggleFilter("female")}
                      />{" "}
                      <span>female</span>
                    </FilterTopics>
                  </ActiveCWrapper>
                </FilterDetailsC>
              </Filterssection>
            ) : (
              ""
            )}

            <div>
              <FilterWrapper>
                <FilterComponent onClick={HendlFilter}>
                  <img src={FilterImg} alt="Filter Img" />
                  <FilterTitle>filter</FilterTitle>
                </FilterComponent>
                <SearchComponent>
                  <SearchImg src={search} alt="search img" />
                  <SearchInput type="text" />
                </SearchComponent>
              </FilterWrapper>
              <UsersSection>
                <UserDetails>
                  {Titlesdata.map((text, index) => {
                    return <span key={index}>{text}</span>;
                  })}
                </UserDetails>
                <Line></Line>
                <div>
                  {users
                    .slice((page - 1) * 10, (page - 1) * 10 + 10)
                    .map((user) => {
                      return (
                        <UserDetailsWrapper key={user.id}>
                          <span>{user.full_name}</span>
                          <span>
                            {user.active === true ? "active" : "inactive"}
                          </span>
                          <span>{user.gender}</span>
                          <span>{user.score}</span>
                          <span>{user.personal_number}</span>
                          <span>{user.mobile_number}</span>
                          <span>{user.address}</span>
                          <span>{user.birth}</span>
                          <UserMail>{user.mail}</UserMail>
                        </UserDetailsWrapper>
                      );
                    })}
                </div>
              </UsersSection>
            </div>
          </Container>
          <PaginationWrapper>
            {pages.map((item) => (
              <button onClick={() => setPage(item)}>{item}</button>
            ))}
          </PaginationWrapper>
        </div>
      </FormCWrapper>
    </Wrapper>
  );
}
export default Form;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
`;
const FormCWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-top: 25px;
  position: relative;
`;
const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const UsersSection = styled.div`
  border-radius: 10px;
  background: #fff;
  width: 100%;
  overflow-x: scroll;
`;
const Filterssection = styled.div`
  max-width: 300px;
  width: 100%;
  height: 295px;
  border-radius: 10px;
  border: 1px solid #fafafa;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(221, 221, 221, 0.25);
  position: absolute;
  top: 70px;
  right: 102%;
`;

const FilterDetailsC = styled.div`
  margin: 43px 46px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const FilterComponent = styled.div`
  border-radius: 10px;
  background: #fff;
  padding: 10px 60px 10px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const ActiveCWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 19px;
  color: #000;
  text-align: center;
  font-size: 14px;
  text-transform: uppercase;
  h3 {
    color: #565656;
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

const FilterTopics = styled.span`
  margin: 0 0 7px 15px;
`;
const FilterTitle = styled.span`
  color: #000;
  font-size: 18px;
  line-height: 132.99%; /* 23.938px */
  margin-left: 35px;
`;
const SearchComponent = styled.div`
  position: relative;
  height: 37px;
`;
const SearchImg = styled.img`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  cursor: pointer;
`;
const SearchInput = styled.input`
  border-radius: 8px;
  background: #fff;
  width: 360px;
  height: 37px;
`;
// UserDetails
const UserDetails = styled.div`
  display: flex;
  column-gap: 20px;
  padding: 20px 67px;
  span {
    min-width: 170px;
    display: flex;
  }
`;
const Line = styled.div`
  height: 1px;
  background: black;
  width: 100%;
  position: absolute;
`;
const UserDetailsWrapper = styled.div`
  display: flex;
  padding: 22px 81px;
  column-gap: 20px;

  span {
    min-width: 170px;
    display: flex;
    line-height: 22px;
  }
  &:nth-child(odd) {
    background: #f6f6f6;
  }
`;
const UserMail = styled.p`
  min-width: 220px;
  display: flex;
`;
const PaginationWrapper = styled.div`
  margin-top: 69px;
  font-size: 18px;
  button {
    border: none;
    background: none;
    color: #fff;
    margin-right: 7px;
    cursor: pointer;
  }
`;
