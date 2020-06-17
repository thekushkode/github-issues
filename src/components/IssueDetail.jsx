import React, { Component } from 'react';
import './IssueDetail.css';
import 'bootstrap/dist/css/bootstrap.css';


class IssueDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            details: null,
        }
    }

    getIssueDetails = () => {
        console.log(this.props);
        const id = this.props.match.params.issue_number;
        fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    details: data,
                })
            })
    }

    componentDidMount = () => {
        this.getIssueDetails();
    }

    render() {
        if (!this.state.details) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h1>Issue Detail</h1>
                <h2>{this.state.details.title}</h2>
                <div className="Flex justify-content-around">
                    <p className='mr-1'>{this.state.details.state}</p>
                    <p className='m-1'>{this.state.details.user.login} opened this issue 1 hour ago · {this.state.details.comments} comments</p>
                </div>
                <p className="Flex ml-2">{this.state.details.user.login} commented 1 hour ago</p>
                <hr />
                <p>{this.state.details.body}</p>


            </div>
        )
    }
}

export default IssueDetail;