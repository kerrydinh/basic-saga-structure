import gql from "graphql-tag";
import { Query } from "react-apollo";
import React , {  useEffect } from "react";
const TEST_GQL = gql`
  {
    courses {
      title
      author
      description
      topic
      url
    }
  }
`;

export function  List()  {
  
  useEffect(() => {
    console.log('unmount');   
  });

  return <Query query={TEST_GQL} fetchPolicy={'network-only'}>
   
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      
      return (
        <ul>
          {data.courses.map(course => (
            <>
              <li>{course.title}</li>
              <li>{course.author}</li>
              <li>{course.description}</li>
              <li>{course.topic}</li>
              <li>{course.url}</li>
            </>
          ))}
        </ul>
      );
    }}
  </Query>
};
