import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const TitleContainer = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
    width:10%;
    
    
    &:hover {
    color: grey;
    text-shadow: 2px 2px 3px black;
    letter-spacing: 4px;
    
    
    
  }
`;

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;