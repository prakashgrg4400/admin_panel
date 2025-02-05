interface DashboardPayables {
    totalCredit: number;
    totalDebit: number;
    totalPayable: number;
}

interface DashboardReceivables {
    receivables: number;
    installmentTotal: string;
}

interface DashboardReceivableAndPayableType {
    payables?: DashboardPayables;
    receivables?: DashboardReceivables;
    isLoading: boolean;
}

interface PayableReceivablePropType extends DashboardReceivableAndPayableType {
    type: "payable" | "receivable";
    title: string;
}

type PayableProgressType = Omit<DashboardPayables, "totalPayable">;

function getPayableProgress({ totalCredit, totalDebit }: PayableProgressType) {
    return `${((totalCredit - totalDebit) / totalCredit) * 100}%`;
}

function getReceivableProgress({
    totalInstallment,
    totalReceivable,
}: {
    totalInstallment: number;
    totalReceivable: number;
}) {
    const totalPaid = totalInstallment - totalReceivable;
    return `${((totalInstallment - totalPaid) / totalInstallment) * 100}%`;
}

function PayableReceivable(props: PayableReceivablePropType) {
    const { payables, receivables, title, type } = props;

    const receivableTotalInstallment = Number(receivables?.installmentTotal);
    const totalCredit = Number(payables?.totalCredit);
    return (
        <div className="bg-white rounded-xl p-6 flex flex-col gap-4">
            <p className="text-2xl font-semibold">{title}</p>
            <div>
                <p className="text-xs text-gray-500">
                    {type === "receivable"
                        ? `Total installment and variation amount receivable from clients NPR ${
                              isNaN(receivableTotalInstallment)
                                  ? "0"
                                  : receivableTotalInstallment
                          }`
                        : `Total amount payables to your vendors ${
                              isNaN(totalCredit) ? "0" : totalCredit
                          }`}
                </p>
                <div className="h-3 bg-[#F8FAFC] rounded-lg relative">
                    <div
                        className={`absolute top-0 left-0 h-3 rounded-lg ${
                            type === "payable" ? "bg-red-600" : "bg-blue-500"
                        }`}
                        style={{
                            width: payables
                                ? getPayableProgress({
                                      totalCredit: payables.totalCredit,
                                      totalDebit: payables.totalDebit,
                                  })
                                : receivables
                                ? getReceivableProgress({
                                      totalInstallment: Number(
                                          receivables.installmentTotal
                                      ),
                                      totalReceivable: receivables.receivables,
                                  })
                                : "0",
                        }}
                    ></div>
                </div>
            </div>
            <div className="bg-[#F8FAFC] p-4 rounded-lg">
                <p className="text-blue-500">CURRENT</p>
                <p className="text-xl font-semibold text-gray-600">
                    NPR{" "}
                    {type === "payable" && payables
                        ? Math.abs(payables?.totalPayable) ?? 0
                        : type === "receivable" && receivables
                        ? receivables?.receivables
                        : "0"}
                </p>
            </div>
        </div>
    );
}
const DashboardReceivablePayable = ({
    isLoading,
    payables,
    receivables,
}: DashboardReceivableAndPayableType) => {
    // console.log("isLoading ==> ", isLoading);
    // console.log("Payables ==> ", payables);
    // console.log("Receivables ==> ", receivables);
    return (
        <>
            <div className="mt-8 grid grid-cols-2 space-x-2 gap-6">
                <PayableReceivable
                    isLoading={isLoading}
                    type="receivable"
                    title="Total Receivables"
                    receivables={receivables}
                />
                <PayableReceivable
                    isLoading={isLoading}
                    type="payable"
                    title="Total Payables"
                    payables={payables}
                />
            </div>
        </>
    );
};

export default DashboardReceivablePayable;
