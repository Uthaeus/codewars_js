// In this Kata, you will write a function doubles that will remove double string characters that are adjacent to each other.


function doubles(s){
    let tempStr = '', result = '';

    for (let x = 0; x < s.length; ) {
        let temp = s[x];
        do {
            tempStr += s[x];
            x++;
        } while (s[x] == temp);

        if (tempStr.length % 2 != 0) {
            result += temp;
        }
        tempStr = '';
    }
    console.log(result);
    return result;
}


console.log(doubles('zzzzykkkd')); //,'ykd')
console.log(doubles('vvvvvoiiiiin')); //,'voin')

let tester = "zqqbcclnkktssvbeefccggoozyylwwziiookkxjvnzcclccggdpssqqvxuukkwwryyztsstpsswwdlssyyuuiihtpjzeessoofmmiilfvccdpdmmssyykkwwtcciidkkyyheehmmeeaammlnwwjeenhnnyyhlhlzcclxccplmmoofwwvzptnoojrdaammyyvuuaaggntlmmmmyymmggxfvtssssmmpwwhccuuggggldvfyyyyxuuoohxaabccmmooroooodoojwwwwvxoofyyssdyybpdaazjqqjpaafssiiwwzkknyyyyfbggggteedsszmmrkkbooheejjvtjiiuubccqqiigglyyooyyoobxvqqaanaaqqprlprlssbvpiivuufbnccxjggnmmuuggxblggssccdssyyaauuzssmmuurhyyyyoofsswwmmvgglgghwwhbdaayytssvjsssszggccmmgglyybjqqeerqqtccccpdjxbhiinryyaabnzyyyyggrkkvxjzqqyytleesseepmmvpaaxtkkxwwqqbqqxmmdmmjaapxfsswwluucceejxaabtssooeeaajuuiiziiyyhheediissjiipxhggpdliijjjrzaaggoojnhyyuudjxsshyyeedxnuuyyyyhyyqqlzggxxhbggmmccuutggmmjbwwwwyynkklxdbwwxrccfluudvkksseeuuyyoonqquuaavzccpxyymmfnqqnssvvxbuummhjmmjuussvcchpggpxqqfiitxccyyrzpvyyqqlqqkkkkeevssvaavdoouueedzpfoonoosskkvrvxssfggxeedaahvooyykkxqqaauukkuurrvwwdtzrduummaadwwyyzssoosstrwwdpmmmmmmeewwvfeeaabaakklwwkkrttaafsspuuooccuuziiggtlfxuueesseekkbqqltrhggnlpssqqxfftoommyyssfeeyyeeuujggjveekkccccdyybaayyssjaapdboofdrhggssuudaaraaloohrtpzssoooosswwuujjuuuussvssxeeaaggeeeepvbhuuggtggwwtwwmmssyyzeenoojiiaarxccjkkfoocctmmfccziiuukkrlrtlfkkkkfeeuutoowwbssmmsswweeoossmmkkeedtjzeeprkktxrggjrooaahaatdqqcclaafhnpkkkkuubeevwwssmmjtwwccggtlzmmggggzoosshjuuoossxooeeiiaanwwtprbpeewwddboommwwaammqqsscchmmeejfncctggggzoowwhqqxuuyyrmmpmmrxwweeqqpooggeehkkhiikkpxoosseetryygguuiipbaaccnyyuuqqiioormmvqqvjjzxvmmuudxjyybftooccccjlmmuuzyyqqjtpqqeepkkccrphiiiinssfooxyyvssgguurmmkkoorjggpnxljggvssrtjaaccbbiildtdpveeccqqztiipnqqlncchjmmuussggbmmooddrfpvpfxooaaaaeeaauuyyeepfwwmmqqloovjuuthaaleewwphbpmmeeffjggtaabuujdxvtmmkkmmxyyyyrqqzmmlvyyjmmzwwnjsspggzblmmbssvssxnssmmyyaavyyoossryypdmmmmuurdqqzrkkbjyyfaauuhtxxreemmccrwwqqljdmmfccmmeeoooojptmmrggwwcceeaajmmfaaiitmmjkkssccmmrvxccqquueepuueertrssxkkziipvn";

let myAns = doubles(tester);
let ans = 'zblntvbfzlzxjvnzldpvxrzpdlhtpjzflfvdpdtdlnjnlhlzlxplfvzptnjrdvntlxfvtphldvfxhxbrdjvxfdbpdzpfznfbtdzrbhvtjblbxvnprlprlbvpvfbnxjnxbldzrhfvlbdtvjzlbjrtpdjxbhnrbnzrvxjztlpvpxtxbxdjpxfljxbtjzdjpxhpdljrzjnhdjxhdxnhlzhbtjbnlxdbxrfldvnvzpxfxbhvhxftxrzpvlvzpfnvrvxfxdhvxvdtzrztrdpvfblrfpztlfxbltrhnlpxtfvdbjpdbfdrhdrlhrtpzvxpvbhznjrxjftfzrlrtltbdtjzprtxrjrhtdlfhnpbvjlhjxntprbpbhjfntzhxrprtrpbnrzxvdxjbftjlzjtrphnfxvjpnxljvrtjldtdpvztpnlnhjbrfpvpfxpflvjthlphbpjtbjdxvtxrzlvjznjpzblbvxnvrpdrdzrbjfhtljdfjptrjftjrvxprtrxzpvn';
console.log(myAns == ans);
