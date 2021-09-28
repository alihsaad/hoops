class Player{

    #yearsPlayed;
    #name;
    #pos;
    #age;
    #team_id;
    #g;
    #gs;
    #mp;
    #fg;
    #fga;
    // #fg_pct;
    #fg3;
    #fg3a;
    // #fg3_pct;
    #fg2;
    #fg2a;
    // #fg2_pct;
    // #efg_pct;
    #ft;
    #fta;
    // #ft_pct;
    #orb;
    #drb;
    #trb;
    #ast;
    #stl;
    #blk;
    #tov;
    #pf;
    #pts;

    constructor(name, pos, age, team_id, g, gs, mp, fg, fga, fg3, fg3a, fg2, fg2a, ft, fta, orb, drb, trb, ast, stl, blk, tov, pf, pts, yearsPlayed){

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
    // this.#fg_pct = fg_pct;
    this.#fg3 = fg3;
    this.#fg3a =fg3a;
    // this.#fg3_pct = fg3_pct;
    this.#fg2 = fg2;
    this.#fg2a = fg2a;
    // this.#fg2_pct= fg2_pct;
    // this.#efg_pct = efg_pct;
    this.#ft = ft;
    this.#fta = fta;
    // this.#ft_pct = ft_pct;
    this.#orb = orb;
    this.#drb = drb;
    this.#trb = trb;
    this.#ast = ast;
    this.#stl = stl;
    this.#blk = blk;
    this.#tov = tov;
    this.#pf = pf;
    this.#pts = pts;
    this.#yearsPlayed = yearsPlayed;
    }

    get getName(){
        return this.#name;
    }

    get getPos(){
        return this.#pos;
    }
 
    get getAge(){
        return this.#age;
    }

    get getTeamID(){
        return this.#team_id;
    }


    get getG(){ //games played 
        return this.#g
    }

    get getGS(){
        return this.#gs
    }

    get getMP(){
        return this.#mp
    }

    get getFG(){
        return this.#fg
    }

    get getFGA(){ //FieldGo
        return this.#fga
    }

    get getFGPCT(){
        return this.#fg/this.#fga;
    }

    get getFG3(){
        return this.#fg3
    }

    get getFG3A(){
        return this.#fg3a
    }

    get getFG3PCT(){
        return this.#fg3/this.#fg3a;
    }

    get getFG2(){
        return this.#fg2
    }

    get getFG2A(){
        return this.#fg2a
    }

    get getFG2PCT(){
        return this.#fg2a/this.#fg3a;
    }

    // getEFGPCT(){
    //     return this.#efg_pct
    // }

    get getFT(){
        return this.#ft
    }

    get getFTA(){
        return this.#fta
    }

    get getFTPCT(){
        return this.#ft/this.#fta;
    }

    get getORB(){
        return this.#orb
    }

    get getDRB(){
        return this.#drb
    }

    get getTRB(){
        return this.#trb
    }

    get getAST(){
        return this.#ast
    }

    get getBLK(){
        return this.#blk
    }
    
    get getSTL(){
        return this.#stl
    }

    get getTOV(){
        return this.#tov
    }

    get getPF(){
        return this.#pf
    }

    get getPTS(){
        return this.#pts
    }
    get getYP()
    {
        return this.#yearsPlayed
    }

//////////////////////////////////////////////////////Setters/////////////////////////////////////////////////////

    set setG(games){ //games played 
        return this.#g = games;
    }

    set setGS(games){
        return this.#gs = games;
    }

    set setMP(MP){
        return this.#mp = MP;
    }

    set setFG(FG){
        return this.#fg = FG;
    }

    set setFGA(FGA){ //FieldGo
        return this.#fga = FGA;
    }

    set setFG3(FG3){
        return this.#fg3 = FG3;
    }

    set setFG3A(FG3A){
        return this.#fg3a = FG3A;
    }

    set setFG2(FG2){
        return this.#fg2 = FG2;
    }

    set setFG2A(FG2A){
        return this.#fg2a = FG2A;
    }

    set setFT(FT){
        return this.#ft = FT;
    }

    set setFTA(FTA){
        return this.#fta = FTA;
    }

    set setORB(ORB){
        return this.#orb = ORB;
    }

    set setDRB(DRB){
        return this.#drb = DRB;
    }
    
    set setTRB(TRB){
        return this.#trb = TRB;
    }

    set setAST(AST){
        return this.#ast = AST;
    }
    set setBLK(BLK){
        return this.#blk = BLK;
    }
    set setSTL(STL){
        return this.#stl = STL;
    }

    set setTOV(TOV){
        return this.#tov = TOV;
    }

    set setPF(PF){
        return this.#pf = PF;
    }

    set setPTS(PTS){
        return this.#pts = PTS;
    }
    set setYP(YP)
    {
        return this.#yearsPlayed = YP;
    }
}

module.exports = Player