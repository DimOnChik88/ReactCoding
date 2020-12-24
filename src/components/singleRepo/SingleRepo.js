import './singleRepo.css'
import moment from 'moment';

export default function SingleRepo(props) {
    const {item} = props;
    if (item) {
        return (
            <div className='repo flex column' data-testid='singleRepo'>
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <p className='title'><a href={item.url} target='_blank'><strong>{item.name}</strong></a></p>
                <p className='description'>{item.description}</p>
                <div className='flex row'>
                    <span title='Topic: programing' className='topic'>programing</span>
                    <span title='Topic: enviroment-variables' className='topic'>enviroment-variables</span>
                    <span title='Topic: produser' className='topic'>produser</span>
                    <span title='Topic: repos' className='topic'>repos</span>
                </div>
                <div className='graph'/>
                <div className='flex row fs12'>
                    <div className='flex row item_baseline mr10'>
                        <span className={`round ${item.language}`}/>
                        <span>{item.language}</span>
                    </div>
                    <div className='flex row item_baseline mr10'>
                        <i className='fa fa-star-o'/>
                        <span> {item.watchers}</span>
                    </div>
                    <div className='flex row item_baseline mr10'>
                        <i className='fa fa-code-fork'/>
                        <span> {item.forks_count}</span>
                    </div>
                    <div className='flex row item_baseline mr10'>
                        <i className='fa fa-balance-scale'/>
                         {item.license && <span> {item.license.name}</span>}
                    </div>
                    <div className='flex row item_baseline mr10'>
                        <span>{item.open_issues_count} issues need help</span>
                    </div>
                    <div className='flex row item_baseline mr10'>
                        <span>Updated {moment(item.updated_at).fromNow()}</span>
                    </div>
                </div>
            </div>
        );
    } else return (
        <div/>
    )
}
