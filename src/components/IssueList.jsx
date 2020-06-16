import React, { Component } from 'react';
import Issue from './Issue';
import IssueDetail from './IssueDetail';


class IssueList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            issues: [],
        }
    }

    getGitIssue = () => {
        fetch('https://api.github.com/repos/facebook/create-react-app/issues')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    issues: data,
                })
            })
    }

    componentDidMount = () => {
        this.getGitIssue();
    }

    render() {
        return (
            <div>
                <h1>Git Issues</h1>
                {this.state.issues.map((issue, index) => {
                    return (
                        <div>
                            <Issue key={index} issue={issue}></Issue>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default IssueList;