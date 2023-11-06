import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Header from "../Components/Header";
import Filter from "../../Images/Form/filter-svg.svg";
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
  return (
    <Wrapper>
      < Header />
      <Container>
        <div>
          {/* <Filters>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            sequi quo repellendus vel reiciendis placeat. Sit ab voluptatem, hic
            necessitatibus exercitationem assumenda asperiores eaque voluptate
            debitis totam adipisci tempore quidem!
          </Filters> */}
          <div>
            <FilterWrapper>
              <FilterComponent>
                <img src={Filter} alt="" />
                <FilterTitle>filter</FilterTitle>
              </FilterComponent>
              <SearchComponent>
                <SearchImg src={search} alt="" />
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
        </div>
      </Container>
    </Wrapper>
  );
}
export default Form;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column
`;
const Container = styled.div`
  max-width: 100%;
  width: 90%;
  margin-top: 25px;
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
  max-width: 1200px;
  width: 100%;
`;
const Filters = styled.div`
  max-width: 300px;
  width: 100%;
  background-color: #fff;
`;

const FilterComponent = styled.div`
  border-radius: 10px;
  background: #fff;
  padding: 10px 60px 10px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
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
