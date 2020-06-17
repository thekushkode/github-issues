import React, { Component } from 'react';
import { Form, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            users: [],
            hidden: true,
            userInfo: '',
            name: '',
            userHandle: '',
            location: '',
            profileUrl: '',
            img: '',
            company: '',
            blog: '',
        }
    }

    getUser = () => {
        fetch(`https://api.github.com/users/${this.state.inputValue}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    users: [
                        ...this.state.users,
                        data,
                    ],
                    inputValue: '',
                })
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getUser();
    }

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value,
            hidden: false,
        })
    }

    render() {
        return (
            <div>
                <Form className='m-4'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter A Valid GitHub Username:</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" value={this.state.inputValue} onChange={this.handleChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Submit
                </Button>
                </Form>
                <div className="m-4">
                    {!this.state.hidden && <div className='row'>
                        {this.state.users.map((user, index) => {
                            return (
                                <Card className='m-2' key={index} style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={user.avatar_url} />
                                    <Card.Body>
                                        <Card.Title>{user.name}</Card.Title>
                                        <Card.Text>{user.login}
                                        </Card.Text>
                                        <Card.Text>Bio: {user.bio}
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <a href={user.html_url}><ListGroupItem>{user.html_url}</ListGroupItem></a>
                                        <ListGroupItem>{user.company}</ListGroupItem>
                                        <a href={user.blog}><ListGroupItem>{user.blog}</ListGroupItem></a>
                                        <ListGroupItem>{user.location}</ListGroupItem>
                                    </ListGroup>
                                </Card>
                            )
                        })}
                    </div>}
                </div>
            </div>
        )
    }
}

export default User;