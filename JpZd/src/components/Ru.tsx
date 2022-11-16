import React from 'react'
import ContentCategory from './ContentCategory';
import "./Ru.css";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  

  return (
    <ContentCategory triggeredBy='Ru.tsx'/>
     );
};

export default ExploreContainer;
