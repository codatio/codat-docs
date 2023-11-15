export default function formConfig() {
  var config = {
    formId: "12605573765661",
    companyId: { name: "Company Id", id: "9776596471197" },
    useCase: {
      name: "Use case",
      id: "12609122281501",
      options: [
        { display: "", tag: "" },
        { display: "Automating Payables", tag: "automating_payable" },
        { display: "Bank feeds", tag: "bank_feeds" },
      ],
    },
    affectedCompanies: {
      name: "Companies affected",
      id: "12609266963485",
      options: [
        { display: "", tag: "" },
        { display: "1", tag: "1_affected_companies" },
        { display: "2-10", tag: "2-10_affected_companies" },
        { display: "11-50", tag: "11-50_affected_companies" },
        { display: "50+", tag: "50_and_up_affected_companies" },
      ],
    },
  };
  return config;
}
