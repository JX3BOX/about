import { $https } from "@jx3box/jx3box-common/js/https";
const $server = $https("server");

function getConfig(key) {
    return $server.get("index/config").then((res) => {
        let _config = {};
        res.data.data.forEach((item) => {
            _config[item.key] = item.val;
        });
        if (key) {
            return _config[key];
        } else {
            return _config;
        }
    });
}

function getArticle(id) {
    return $server
        .get("post/find", {
            params: {
                id: id,
            },
        })
        .then((res) => {
            return res.data.data.post.post_content;
        });
}

export { getConfig, getArticle };
