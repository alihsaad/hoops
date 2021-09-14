const request = require("request-promise");
const cheerio = require("cheerio");
const Player = require('./player.js')
const url = 'https://www.basketball-reference.com/leagues/NBA_2021_totals.html';


request(url, (error, res, html) => {
    if(!error, res.statusCode === 200){
        // const $= cheerio.load(html);
        // const table = $('.full_table').each((i,x) => {
        //     const item = $(x).text();
        //     //console.log(item);
        //     //const name = $(x).find('[data-stat="player"]').text();
        //     console.log(name);

        const $ = cheerio.load(html);
        const myPlayers = [];
        const table = $('.full_table').each((i, x) => {

        const name = $(x).find( '[data-stat = "player"]').text()
        const pos = $(x).find('[data-stat = "pos"]').text()
        const age = $(x).find('[data-stat = "age"]').text()
        const team_id = $(x).find('[data-stat = "team_id"]').text()
        const g = $(x).find('[data-stat = "g"]').text()
        const gs = $(x).find('[data-stat = "gs"]').text()
        const mp = $(x).find('[data-stat = "mp"]').text()
        const fg = $(x).find('[data-stat = "fg"]').text()
        const fga = $(x).find('[data-stat = "fga"]').text()
        const fg_pct = $(x).find('[data-stat = "fg_pct"]').text()
        const fg3 = $(x).find('[data-stat = "fg3"]').text()
        const fg3a = $(x).find('[data-stat = "fg3a"]').text()
        const fg3_pct = $(x).find('[data-stat = "fg3_pct"]').text()
        const fg2 = $(x).find('[data-stat = "fg2"]').text()
        const fg2a = $(x).find('[data-stat = "fg2a"]').text()
        const fg2_pct = $(x).find('[data-stat = "fg2_pct"]').text()
        const efg_pct = $(x).find('[data-stat = "efg_pct"]').text()
        const ft = $(x).find('[data-stat = "ft"]').text()
        const fta = $(x).find('[data-stat = "fta"]').text()
        const ft_pct = $(x).find('[data-stat = "ft_pct"]').text()
        const orb = $(x).find('[data-stat = "orb"]').text()
        const drb = $(x).find('[data-stat = "drb"]').text()
        const trb = $(x).find('[data-stat = "trb"]').text()
        const ast = $(x).find('[data-stat = "ast"]').text()
        const stl = $(x).find('[data-stat = "stl"]').text()
        const blk = $(x).find('[data-stat = "blk"]').text()
        const tov = $(x).find('[data-stat = "tov"]').text()
        const pf = $(x).find('[data-stat = "pf"]').text()
        const pts = $(x).find('[data-stat = "pts"]').text()
        

        let player = new Player(name, pos, age, team_id, g, gs, mp, fg, fga, fg_pct, fg3,fg3a, fg3_pct, fg2, fg2a, fg2_pct, efg_pct, ft, fta, ft_pct, orb, drb, trb, ast, stl, blk, tov, pf, pts);
        myPlayers.push(player);

        console.log(player.getName());
        //getters arent working for some reason but fix tomorrow 
             






        });
    }
})

