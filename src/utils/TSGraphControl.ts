export class TSGraphControl {
    private static graphIdCount = 0;
    public static GetGraphId = () => TSGraphControl.graphIdCount++;

    private static nodeIdCount = 0;
    public static GetNodeId = () => TSGraphControl.nodeIdCount++;
}