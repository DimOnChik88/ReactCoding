import React, {Component} from 'react';
import {RepositoryService} from "../../service/repository.service";
import SingleRepo from "../singleRepo/SingleRepo";
import Pagination from "../pagination/Pagination";

class AllRepo extends Component {
    state = {
        repo: [],
        use_filter: false,
        filtered: [],
        current_page: 1,
        repo_pre_page: 5
    }
    input_filter = React.createRef();
    language_select = React.createRef();
    repo_service = new RepositoryService();

    onInputFilter = () => {
        const {repo} = this.state
        const search = this.input_filter.current.value
        const language_select = this.language_select.current.value
        let filtered = repo.filter(item => item.name.includes(search))
        filtered = language_select ? filtered.filter(item => item.language === language_select) : filtered
        this.setState({filtered, use_filter: true, current_page: 1})
    }

    paginate = page => {
        console.log(page);
        this.setState({current_page: page});
    }

    async componentDidMount() {
        const repo = await this.repo_service.getAllRepos()
        this.setState({repo})
    }

    render() {
        const {repo, use_filter, filtered, current_page, repo_pre_page} = this.state;
        // Get current repo
        const total_repo = use_filter ? filtered : repo;
        const index_of_last_repo = current_page * repo_pre_page;
        const index_of_first_repo = index_of_last_repo - repo_pre_page;
        const repo_to_show = total_repo.slice(index_of_first_repo, index_of_last_repo)
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
                    repo_to_show.map((item, index) => <SingleRepo item={item} key={index}/>)
                }
                <Pagination paginate={this.paginate} repo_pre_page={repo_pre_page} total_repo={total_repo} current_page={current_page}/>
            </div>
        );
    }
}

export default AllRepo;
