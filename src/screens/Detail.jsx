import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchCharacterInfo } from '../apis';

const Container = styled.div`
  padding: 20px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: yellow;
  }
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Character = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 30vw;
  min-width: 150px;
  max-width: 300px;
  height: 30vw;
  min-height: 150px;
  max-height: 300px;
  border-radius: 50%;
`;

const Name = styled.span`
  font-style: italic;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`;

const Films = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Film = styled.span`
  background-color: white;
  color: black;
  padding: 10px;
  border-radius: 20%;
`;

function Detail() {
  const { id } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: ['Character', id],
    queryFn: () => fetchCharacterInfo(id),
  });

  return (
    <Container>
      <Header>
        <Link to="/">Back</Link>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Character>
            <Image src={data.imageUrl} />
            <Name>{data.name}'s Films</Name>
          </Character>
          <Films>
            {data?.films.map((item, idx) => (
              <Film key={idx}>{item}</Film>
            ))}
          </Films>
        </>
      )}
    </Container>
  );
}
export default Detail;
