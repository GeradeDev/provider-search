class BenefitOption {
    Name:String = "";
    IsNetwork:Boolean = false;
    OptionCode:string = "";

    constructor(name:string, isnetwork:boolean, code:string){
        this.Name = name;
        this.IsNetwork = isnetwork;
        this.OptionCode = code;
    }
}

export class MedihelpOptions {

    getAllOptions () {

        let options:BenefitOption[] = [
            new BenefitOption("Dimension Prime 1", false, "D1"),
            new BenefitOption("Dimension Prime 1 - Network", true, "D2"),
            new BenefitOption("Dimension Prime 2", false, ""),
            new BenefitOption("Dimension Prime 2 - Network", true, ""),
            new BenefitOption("Dimension Prime 3", false, ""),
            new BenefitOption("Dimension Prime 3 - Network", true, ""),
            new BenefitOption("Dimension Prime Elite", false, ""),
            new BenefitOption("Medihelp Plus", false, ""),
            new BenefitOption("Necesse", false, ""),
            new BenefitOption("Unify", false, ""),
        ];

        return options;
    }
}