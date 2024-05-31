// each process will have its own Singleton instance, and the processId associated with each instance will be displayed accordingly. 

class Singleton {
    private static instance: Singleton | null = null;
    private static processId: number;

    private constructor(processId: number) {
        Singleton.processId = processId;
    }

    public static getInstance(processId: number): Singleton {
        if (Singleton.instance === null || Singleton.processId !== processId) {
            Singleton.instance = new Singleton(processId);
        }
        return Singleton.instance;
    }

    public showMessage(): void {
        console.log(`Singleton instance for process ${Singleton.processId}`);
    }
}

export default Singleton;