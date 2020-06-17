import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import RepoCard from './RepoCard';

class UserRepos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            masterDetails: '',
            name: '',
            link: '',
            description: '',
            prim_lang: '',
            stars_count: '',
            watch_count: '',
            fork_count: '',
            inputValue: '',
            repos: [],
        }
    }

    getRepos = () => {
        fetch(`https://api.github.com/users/${this.state.inputValue}/repos`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    repos: [...data, ...this.state.repos],
                    inputValue: '',
                })
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getRepos();
    }

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }


    render() {
        return (
            <div>
                <div>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Enter A Valid Github Username...</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} value={this.state.inputValue} />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </div>
                <div>
                    {this.state.repos.map((repo, index) => {
                        return (
                            <RepoCard key={index} repo={repo}/>
                        )
                    })}
                </div>
            </div>

        )
    }
}

export default UserRepos;