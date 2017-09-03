const Gist = {
    "url": "https://api.github.com/gists/7bee1d96f7e6bf0478b664e3bf3080bc",
    "forks_url": "https://api.github.com/gists/7bee1d96f7e6bf0478b664e3bf3080bc/forks",
    "commits_url": "https://api.github.com/gists/7bee1d96f7e6bf0478b664e3bf3080bc/commits",
    "id": "7bee1d96f7e6bf0478b664e3bf3080bc",
    "git_pull_url": "https://gist.github.com/7bee1d96f7e6bf0478b664e3bf3080bc.git",
    "git_push_url": "https://gist.github.com/7bee1d96f7e6bf0478b664e3bf3080bc.git",
    "html_url": "https://gist.github.com/7bee1d96f7e6bf0478b664e3bf3080bc",
    "files": {
        "ConfigTemplate.js": {
            "filename": "ConfigTemplate.js",
            "type": "application/javascript",
            "language": "JavaScript",
            "raw_url": "https://gist.githubusercontent.com/jonniespratley/7bee1d96f7e6bf0478b664e3bf3080bc/raw/dd6b5607012213b7f1ca929e832a94dfabbd45b1/ConfigTemplate.js",
            "size": 1598,
            "truncated": false,
            "content": "//confiog\nimport fse from 'fs-extra';\n\nimport objectPath from 'object-path';\n\nclass Config {\n  constructor(strategy) {\n    this.data = {};\n    this.strategy = strategy;\n  }\n\n  get(path) {\n    return objectPath.get(this.data, path);\n  }\n\n  set(path, value) {\n    return objectPath.set(this.data, path, value);\n  }\n\n  read(file) {\n    console.log(`Deserializing from ${file}`);\n    this.data = this.strategy.deserialize(fse.readFileSync(file, 'utf-8'));\n  }\n\n  save(file) {\n    console.log(`Serializing to ${file}`);\n    fse.ensureFileSync(file);\n    fse.writeFileSync(file, this.strategy.serialize(this.data));\n  }\n}\n\n//\nconst JsonConfigStrategy = {\n  deserialize(data) {\n    return JSON.parse(data);\n  },\n  serialize(data) {\n    return JSON.stringify(data, null, '  ');\n  }\n}\n\n//\nimport ini from 'ini'; //-> https://npmjs.org/package/ini\n\nconst IniConfigStrategy = {\n  deserialize(data) {\n    return ini.parse(data);\n  },\n  serialize(data) {\n    return ini.stringify(data);\n  }\n}\n\nconst strategies = {\n    json: JsonConfigStrategy,\n    ini: IniConfigStrategy\n};\n\n\n//test\n//var Config = require('./config');\n//var strategies = require('./strategies');\n\nconst jsonConfig = new Config(strategies.json);\n\n\njsonConfig.set('book.nodejs', 'design patterns');\njsonConfig.set(`demo.timestamp-${Date.now()}`, 'This is a set value.');\njsonConfig.save('samples/conf.json');\njsonConfig.read('samples/conf.json');\nconsole.log(jsonConfig.get())\n\nconst iniConfig = new Config(strategies.ini);\n\niniConfig.set('book.nodejs', 'design patterns');\niniConfig.save('samples/conf.ini');\niniConfig.read('samples/conf.ini');"
        },
        "json-strategy.js": {
            "filename": "json-strategy.js",
            "type": "application/javascript",
            "language": "JavaScript",
            "raw_url": "https://gist.githubusercontent.com/jonniespratley/7bee1d96f7e6bf0478b664e3bf3080bc/raw/89e83d5ffb3f78ff455b8130773941ccd00102ca/json-strategy.js",
            "size": 189,
            "truncated": false,
            "content": "const JsonConfigStrategy = {\n  deserialize(data) {\n    return JSON.parse(data);\n  },\n  serialize(data) {\n    return JSON.stringify(data, null, '  ');\n  }\n}\nexport default JsonConfigStrategy"
        }
    },
    "public": true,
    "created_at": "2017-04-25T17:19:30Z",
    "updated_at": "2017-04-25T17:46:34Z",
    "description": "NodeJS - Config Template",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/7bee1d96f7e6bf0478b664e3bf3080bc/comments",
    "owner": {
        "login": "jonniespratley",
        "id": 320490,
        "avatar_url": "https://avatars1.githubusercontent.com/u/320490?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/jonniespratley",
        "html_url": "https://github.com/jonniespratley",
        "followers_url": "https://api.github.com/users/jonniespratley/followers",
        "following_url": "https://api.github.com/users/jonniespratley/following{/other_user}",
        "gists_url": "https://api.github.com/users/jonniespratley/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/jonniespratley/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/jonniespratley/subscriptions",
        "organizations_url": "https://api.github.com/users/jonniespratley/orgs",
        "repos_url": "https://api.github.com/users/jonniespratley/repos",
        "events_url": "https://api.github.com/users/jonniespratley/events{/privacy}",
        "received_events_url": "https://api.github.com/users/jonniespratley/received_events",
        "type": "User",
        "site_admin": false
    },
    "forks": [],
    "history": [
        {
            "user": {
                "login": "jonniespratley",
                "id": 320490,
                "avatar_url": "https://avatars1.githubusercontent.com/u/320490?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/jonniespratley",
                "html_url": "https://github.com/jonniespratley",
                "followers_url": "https://api.github.com/users/jonniespratley/followers",
                "following_url": "https://api.github.com/users/jonniespratley/following{/other_user}",
                "gists_url": "https://api.github.com/users/jonniespratley/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/jonniespratley/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/jonniespratley/subscriptions",
                "organizations_url": "https://api.github.com/users/jonniespratley/orgs",
                "repos_url": "https://api.github.com/users/jonniespratley/repos",
                "events_url": "https://api.github.com/users/jonniespratley/events{/privacy}",
                "received_events_url": "https://api.github.com/users/jonniespratley/received_events",
                "type": "User",
                "site_admin": false
            },
            "version": "cbb7896955fa1d431b0be437d738beb68fe0d739",
            "committed_at": "2017-04-25T17:46:33Z",
            "change_status": {
                "total": 83,
                "additions": 69,
                "deletions": 14
            },
            "url": "https://api.github.com/gists/7bee1d96f7e6bf0478b664e3bf3080bc/cbb7896955fa1d431b0be437d738beb68fe0d739"
        },
        {
            "user": {
                "login": "jonniespratley",
                "id": 320490,
                "avatar_url": "https://avatars1.githubusercontent.com/u/320490?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/jonniespratley",
                "html_url": "https://github.com/jonniespratley",
                "followers_url": "https://api.github.com/users/jonniespratley/followers",
                "following_url": "https://api.github.com/users/jonniespratley/following{/other_user}",
                "gists_url": "https://api.github.com/users/jonniespratley/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/jonniespratley/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/jonniespratley/subscriptions",
                "organizations_url": "https://api.github.com/users/jonniespratley/orgs",
                "repos_url": "https://api.github.com/users/jonniespratley/repos",
                "events_url": "https://api.github.com/users/jonniespratley/events{/privacy}",
                "received_events_url": "https://api.github.com/users/jonniespratley/received_events",
                "type": "User",
                "site_admin": false
            },
            "version": "950d004a0d35ffa567dd04281fbada5ee38a7523",
            "committed_at": "2017-04-25T17:19:29Z",
            "change_status": {
                "total": 31,
                "additions": 31,
                "deletions": 0
            },
            "url": "https://api.github.com/gists/7bee1d96f7e6bf0478b664e3bf3080bc/950d004a0d35ffa567dd04281fbada5ee38a7523"
        }
    ],
    "truncated": false
};
module.exports = Gist;
