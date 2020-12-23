export class RepositoryService {
    URL = 'https://api.github.com/users/a8m/repos'
    getAllRepos = async () => {
        return fetch(this.URL).then(value => value.json())
    }
}
