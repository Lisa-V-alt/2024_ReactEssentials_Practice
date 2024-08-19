import {calculateInvestmentResults, formatter} from '../util/investment.js';

export default function Results({ input }){
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;  //needed for calculations below

    return(
        <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Invesment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultsData.map(yearData => {
                //calculation for total interest:
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

                return <tr key={yearData.year}>
                  <td>{yearData.year}</td>
                  {/* util formatter object formats numbers / rounds numbers */}
                  <td>{formatter.format(yearData.valueEndOfYear)}</td>
                  <td>{formatter.format(yearData.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
        </tbody>
    </table>
    );
}