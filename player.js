class Player{
    #name;
    #pos;
    #age;
    #team_id;
    #g;
    #gs;
    #mp;
    #fg;
    #fga;
    #fg_pct;
    #fg3;
    #fg3a;
    #fg3_pct;
    #fg2;
    #fg2a;
    #fg2_pct;
    #efg_pct;
    #ft;
    #fta;
    #ft_pct;
    #orb;
    #drb;
    #trb;
    #ast;
    #stl;
    #blk;
    #tov;
    #pf;
    #pts;

    constructor(name, pos, age, team_id, g, gs, mp, fg, fga, fg_pct, fg3, fg3a, fg3_pct, fg2, fg2a, fg2_pct, efg_pct, ft, fta, ft_pct, orb, drb, trb, ast, stl, blk, tov, pf, pts){

    //private fields need # before the var name  
   
    this.#name = name;
    this.#pos = pos;
    this.#age = age;
    this.#team_id = team_id;
    this.#g = g;
    this.#gs = gs;
    this.#mp = mp;
    this.#fg = fg;
    this.#fga = fga;
    this.#fg_pct = fg_pct;
    this.#fg3 = fg3;
    this.#fg3a =fg3a;
    this.#fg3_pct = fg3_pct;
    this.#fg2 = fg2;
    this.#fg2a = fg2a;
    this.#fg2_pct= fg2_pct;
    this.#efg_pct = efg_pct;
    this.#ft = ft;
    this.#fta = fta;
    this.#ft_pct = ft_pct;
    this.#orb = orb;
    this.#drb = drb;
    this.#trb = trb;
    this.#ast = ast;
    this.#stl = stl;
    this.#blk = blk;
    this.#tov = tov;
    this.#pf = pf;
    this.#pts = pts;

    function getName(){
        return this.#name
    }

    function getPos(){
        return this.pos;
    }

    function getAge(){
        return this.age;
    }

    function getTeamID(){
        return this.team_id;
    }

    function getG(){ //games played 
        return this.name
    }

    function getGS(){
        return this.name
    }

    function getMP(){
        return this.mp
    }

    function getFG(){
        return this.fg
    }

    function getFGA(){ //FieldGo
        return this.fga
    }

    function getFGPCT(){
        return this.fg_pct
    }

    function getFG3(){
        return this.fg3
    }

    function getFG3A(){
        return this.fg3a
    }

    function getFG3PCT(){
        return this.fg3_pct
    }

    function getFG2(){
        return this.fg2
    }

    function getEFGPCT(){
        return this.efg_pct
    }

    function getFT(){
        return this.ft
    }

    function getFTA(){
        return this.fta
    }

    function getFTPCT(){
        return this.ft_pct
    }

    function getFTA(){
        return this.fta
    }

    function getFTPCT(){
        return this.ft_pct
    }

    function getORB(){
        return this.orb
    }

    function getDRB(){
        return this.drb
    }


    function getTRB(){
        return this.trb
    }

    function getAST(){
        return this.ast
    }


    function getSTL(){
        return this.stl
    }

    function getTOV(){
        return this.tov
    }

    function getPF(){
        return this.pf
    }

    function getPTS(){
        return this.pts
    }


    }
}


module.exports = Player