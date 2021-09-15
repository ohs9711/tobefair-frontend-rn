import React from "react";
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: white;
  padding-top: 10%;
  flex: 1;
`;
const TopContainer = styled.View`
  background-color: white;
  flex: 1;
`;
const HomeButton = styled.TouchableOpacity`
  flex: 6;
  background-color: #008577;
`;
const HomeText = styled.Text`
  color: white;
  margin: auto;
  text-align: center;
  font-weight: bold;
  font-size: 27px;
`;
const Search = styled.TextInput`
  flex: 5;
  background-color: #f0f0f0;
  border: 1px solid #5d8c87;
  border-radius: 30px;
  margin: 10px;
  padding-left: 20px;
  font-size: 20px;
`;
const BottomContainer = styled.View`
  background-color: white;
  flex: 5;
  justify-content: center;
  margin: 0 20px;
`;
const GuideText = styled.Text`
  color: #5d8c87;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 10%;
  margin-bottom: 10%;
`;
const CategoryButton = styled.TouchableOpacity`
  background-color: #fff;
  border: 2px solid #5d8c87;
  border-radius: 15px;
  margin: 2%;
`;
const CategoryText = styled.Text`
  text-align: center;
  color: #000;
  font-size: 35px;
  font-weight: bold;
  margin: 7%;
`;

const Category = ({navigation}) => {
    return (
        <Container>
            <TopContainer>
                <HomeButton onPress={() => {
                    navigation.popToTop()
                }}>
                    <HomeText>
                        처음으로 돌아가기
                    </HomeText>
                </HomeButton>
                <Search
                    placeholder='검색어를 입력하세요.'/>
            </TopContainer>
            <BottomContainer>
                <CategoryButton>
                    <CategoryText>추천메뉴</CategoryText>
                </CategoryButton>
                <CategoryButton>
                    <CategoryText>세트메뉴</CategoryText>
                </CategoryButton>
                <CategoryButton>
                    <CategoryText onPress={()=>{navigation.navigate('MenuList')}}>음료</CategoryText>
                </CategoryButton>
                {/*MenuDetail로 넘어가는 이 부분에서 각 메뉴별 정보 넘기자 */}
                <CategoryButton onPress={() => {
                    navigation.navigate('MenuDetail')
                }}>
                    <CategoryText>음식</CategoryText>
                </CategoryButton>
                <GuideText>
                    원하는 메뉴를 선택하세요.
                </GuideText>
            </BottomContainer>
        </Container>
    );
}

export default Category;