import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function RepoCard(props) {
    const { repo } = props;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={repo.avatar_url} />
            <Card.Body>
                <Card.Title>{repo.name}</Card.Title>
                <a href={repo.html_url}><Card.Text>{repo.html_url}</Card.Text></a>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Desc: {repo.description}</ListGroupItem>
                <ListGroupItem>Primary Lang: {repo.languages_url}</ListGroupItem>
                <ListGroupItem>Stars: {repo.stargazers_count}</ListGroupItem>
                <ListGroupItem>Watching: {repo.watchers_count}</ListGroupItem>
                <ListGroupItem>Forks: {repo.forks_count}</ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default RepoCard;
