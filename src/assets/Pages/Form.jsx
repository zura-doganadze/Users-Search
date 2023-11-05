import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Filter from "../../Images/Form/filter-svg.svg";
import search from "../../Images/Form/search.svg";
function Form() {
  return (
    <Wrapper>
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
                <span>სტუდენტის სახელი და გვარი</span>
                <span>სტატუსი</span>
                <span>სქესი</span>
                <span>ქულები</span>
                <span>პირადი ნომერი</span>
                <span>მაილი</span>
                <span>მობილურის ნომერი</span>
                <span>მისამართი</span>
                <span>დაბადების თარიღი</span>
              </UserDetails>
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

`