import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Header from "../Components/Header";
import FilterImg from "../../Images/Form/filter-svg.svg";
import search from "../../Images/Form/search.svg";
import userData from "../../userData.json";
function Form() {
  const Titlesdata = [
    "სტუდენტის სახელი და გვარი",
    "სტატუსი",
    "სქესი",
    "ქულები",
    "პირადი ნომერი",
    " მაილი",
    " მობილურის ნომერი",
    "მისამართი",
    "დაბადების თარიღი",
  ];
  const [users, setUsers] = useState(userData);
  const [filter, setFilter] = useState(false);

  function HendlFilter() {
    setFilter(!filter);
  }
  return (
    <Wrapper>
      <Header />
      <FormCWrapper>
        <div>
          <Container>
            {filter === true ? (
              <FiltersCard>
                <FilterDetailsC>
                  <ActiveCWrapper>
                    <FilterTitles>სტუდენტის სტატუსი</FilterTitles>
                    <FilterTopics>
                      <input type="checkbox" />
                      <span>active</span>
                    </FilterTopics>
                    <FilterTopics>
                      <input type="checkbox" />
                      <span>inactive</span>
                    </FilterTopics>
                  </ActiveCWrapper>
                  <ActiveCWrapper>
                    <FilterTitles>სქესი</FilterTitles>
                    <FilterTopics>
                      <input type="checkbox" />
                      <span>male</span>
                    </FilterTopics>
                    <FilterTopics>
                      <input type="checkbox" />
                      <span>female</span>
                    </FilterTopics>
                  </ActiveCWrapper>
                </FilterDetailsC>
              </FiltersCard>
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

                <div>
                  {users.map((user) => {
                    return (
                      <UserDetailsWrapper key={user.id}>
                        <span>{user.full_name}</span>
                        <span>
                          {user.active === true ? "active" : "inactive"}
                        </span>
                        <span>{user.gender}</span>
                        <span>{user.score}</span>
                        <span>{user.personal_number}</span>
                        <span>{user.mail}</span>
                        <span>{user.mobile_number}</span>
                        <span>{user.address}</span>
                        <span>{user.birth}</span>
                      </UserDetailsWrapper>
                    );
                  })}
                </div>
              </UsersSection>
            </div>
          </Container>
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
`;
const FiltersCard = styled.div`
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
`;
const FilterTitles = styled.div`
  color: #565656;
  font-size: 14px;
  margin-bottom: 15px;
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
  column-gap: 50px;
  border-bottom: 2px solid black;
  padding: 28px 67px;
`;

const UserDetailsWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  column-gap: 30px;
  padding: 28px 81px;
`;
