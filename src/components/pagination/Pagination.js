import './pagination.css'
export default function Pagination(props) {
    const {total_repo, paginate, repo_pre_page, current_page} = props;
    let page_numbers = [];

    for(let i = 1; i <= Math.ceil(total_repo.length/repo_pre_page); i++){
        page_numbers.push(i)
    }
    if(page_numbers) {
        return (
            <nav className='flex column item_center'>
                <ul className='list_none flex ro'>
                    {page_numbers.map((page) => (
                        <li key={page} className={`pagination ${page===current_page? 'current' : ''}`}>
                            <a onClick={() => paginate(page)} href='#'>{page}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}
