import React from 'react'
import {Card,CardTitle,CardText,CardBody} from 'reactstrap'

function UserCard({name,username}) {
  return (
    <div>
    <Card
    >
      <CardBody>
        <CardTitle tag="h5">
         {name}
        </CardTitle>
        <CardText>
          {username}
        </CardText>
      </CardBody>
    </Card>
  </div>
  )
}

export default UserCard