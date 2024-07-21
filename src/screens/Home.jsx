import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../apis';

const Container = styled.div`
  padding: 20px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Characters = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: 20px;
`;

const Character = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5px;
	padding: 5px;
	border-radius: 5%;
	&:hover {
		background-color: white;
		color: black;
		transition: 0.5s ease-in-out;
		cursor: hand;
	}
`;

const Image = styled.img`
  width: 20vw;
  min-width: 50px;
  max-width: 150px;
  height: 20vw;
  min-height: 50px;
  max-height: 150px;
  border-radius: 50%;
`;

const Name = styled.span`
  font-style: italic;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`;

function Home() {
  const navigate = useNavigate();
  const goToDetail = (e) => {
    navigate(`/character/${e.currentTarget.id}`);
  };
  const { isLoading, data } = useQuery({
    queryKey: ['allCharacters'],
    queryFn: fetchCharacters,
  });

  return (
    <Container>
      <Header>
        <Title>Disney Characters</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <Characters>
          {data?.slice(0, 100).map((item) => (
            <Link key={item.id} to={`/character/${item.id}`}>
              <Character id={item.id} onClick={goToDetail}>
                <Image src={item.imageUrl} loading="lazy" />
                <Name>{item.name}</Name>
              </Character>
            </Link>
          ))}
        </Characters>
      )}
    </Container>
  );
}
export default Home;
