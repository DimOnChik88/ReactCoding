import React, {Component} from 'react';
import {RepositoryService} from "../../service/repository.service";
import SingleRepo from "../singleRepo/SingleRepo";

class AllRepo extends Component {
    state = {
        repo: [],
        use_filter: false,
        filtered: []
    }
    input_filter = React.createRef();
    language_select = React.createRef();
    repo_service = new RepositoryService();

    onInputFilter = () => {
        const {repo} = this.state
        const search = this.input_filter.current.value
        const language_select = this.language_select.current.value
        console.log(language_select);
        console.log(search);
        let filtered = repo.filter(item => item.name.includes(search))
        filtered = language_select ? filtered.filter(item => item.language === language_select) : filtered
        this.setState({filtered, use_filter:true})
    }

    async componentDidMount() {
        const repo = await this.repo_service.getAllRepos()
        this.setState({repo})
    }

    render() {
        const {repo, use_filter, filtered} = this.state;
        return (
            <div className='w100'>
                <form className='flex row jc_between filter_block'>
                    <input type="text" ref={this.input_filter} onInput={this.onInputFilter}
                           placeholder='Find a repository...' className='w70' data-testid='filter_input'/>
                    <div className='flex row jc_between w24'>
                        <select className='w70 text_center' ref={this.language_select} onChange={this.onInputFilter}>
                            <option value=''>Language: All</option>
                            <option value='JavaScript'>JavaScript</option>
                            <option value='Python'>Python</option>
                            <option value='Go'>Go</option>
                            <option value='C'>C</option>
                        </select>
                    </div>
                </form>
                {
                  !use_filter && repo.map((item, index) => <SingleRepo item={item} key={index}/>)
                }
                { use_filter && filtered.map((item, index) => <SingleRepo item={item} key={index}/>)}
            </div>
        );
    }
}

export default AllRepo;
