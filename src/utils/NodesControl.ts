export class NodesControl {
    private static nodeIdCount = 0;
    public static GetNodeId = () => NodesControl.nodeIdCount++;
}