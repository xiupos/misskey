# ぽすきー

Fork of [misskey-dev/misskey](https://github.com/misskey-dev/misskey).

## Install

```bash
git clone -b m@ster git+https://github.com/xiupos/misskey.git
```

OR

```bash
docker pull ghcr.io/xiupos/misskey:latest
```

And see [Misskey Hub](https://misskey-hub.net/en/docs/install/docker.html).

## Develop

```bash
git clone git@github.com:xiupos/misskey
cd misskey

git remote add misskey-dev git@github.com:misskey-dev/misskey
git fetch misskey-dev
git checkout -b misskey-dev-master misskey-dev/master
```

## My Servers

- `m@ster`: https://mk.xiupos.net
- `m@ster-dev`: https://posky-dev.x4s.io (not federated)

## Changelog

### m@ster-dev

### 12.110.0-posky-12.9.7

- Merge [12.110.0](https://github.com/misskey-dev/misskey/releases/tag/12.110.0)

### 12.109.2-posky-12.9.7

- Merge [12.109.2](https://github.com/misskey-dev/misskey/releases/tag/12.109.2)

### 12.108.1-posky-12.9.7

- Merge [12.108.1](https://github.com/misskey-dev/misskey/releases/tag/12.108.1)

### 12.108.0-posky-12.9.7

- Merge [12.108.0](https://github.com/misskey-dev/misskey/releases/tag/12.108.0)

### 12.107.0-posky-12.9.7

- Merge [12.107.0](https://github.com/misskey-dev/misskey/releases/tag/12.107.0)

### 12.106.3-posky-12.9.7

- Merge [12.106.3](https://github.com/misskey-dev/misskey/releases/tag/12.106.3)

### 12.106.2-posky-12.9.7

- Merge [12.106.2](https://github.com/misskey-dev/misskey/releases/tag/12.106.2)

### 12.106.1-posky-12.9.7

- Merge [12.106.1](https://github.com/misskey-dev/misskey/releases/tag/12.106.1)

### 12.106.0-posky-12.9.6

- Merge [12.106.0](https://github.com/misskey-dev/misskey/releases/tag/12.106.0)

### 12.105.0-posky-12.9.6

- Merge [12.105.0](https://github.com/misskey-dev/misskey/releases/tag/12.105.0)

### 12.104.0-posky-12.9.5

- dockerイメージをaarch64でもビルドするように

### 12.104.0-posky-12.8.1

- Merge [12.104.0](https://github.com/misskey-dev/misskey/releases/tag/12.104.0)

### 12.103.1-posky-12.8.1

- Merge [12.103.1](https://github.com/misskey-dev/misskey/releases/tag/12.103.1)

### 12.102.1-posky-12.8.1

- Merge [12.102.1](https://github.com/misskey-dev/misskey/releases/tag/12.102.1)

### 12.102.0-posky-12.8.1

- ~~設定画面の見出しのデザイン~~

### 12.102.0-posky-12.7.2

- Merge [12.102.0](https://github.com/misskey-dev/misskey/releases/tag/12.102.0)

### 12.101.1-posky-12.7.2

- Page 編集画面のレイアウトを調整 [#7](https://github.com/xiupos/misskey/pull/7)

### 12.101.1-posky-12.6

- Page デザインの修正 [#5](https://github.com/xiupos/misskey/pull/5#issue-1106950406)

### 12.101.1-posky-12.5

- [xianon/misskey@39184c41](https://gitlab.com/xianon/misskey/-/commit/39184c416e3703fa9e96a62bb5048863906a9c05) をコピー

### 12.101.1-posky-12.4

- リリースノートのURLを[ここ](https://github.com/xiupos/misskey)に

### 12.101.1-posky-12.3

- README.md を独自のものに
- 登録ボタンを削除([参考](https://github.com/nullnyat/nca10.net/commit/01185a830b2317ea354de71b1c99466350891916))

### 12.101.1-posky-12.2

- 色，テーマをオリジナルのものに([参考](https://github.com/nullnyat/nca10.net/commit/a03f330c49b4c57f40e97ed6d550802ab98a3dd4))

### 12.101.1-posky-12.1

- GitHub Actions で[テスト鯖](https://dev.xiupos.net/)，[本番鯖](https://mk.xiupos.net)にデプロイ
- ひっぱってくるrelesesのバージョンをぽすきーのものに

### 12.101.1-posky-12.0

- Fork
- GitHub Actions で GitHub Container Registry にイメージをデプロイ
- 一部のリポジトリリンクを[ここ](https://github.com/xiupos/misskey)に
