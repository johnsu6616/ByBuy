        $(document).ready(function(){
            function formatSolution(data){
                var solutionCount = data.solution_count;
                var solutions = data.solutions;
                var resultHTML = "<div>solution count: "+solutionCount.toString()+"</div>";
                resultHTML += "<div>solutions:</div>";
                for(var i in solutions){
                    var solutionStr = solutions[i].map(function(price){
                        return price.toString();
                    }).join(",");
                    resultHTML += "<div>"+solutionStr+"</div>"
                }
                return resultHTML;
            }
            $("#find_exact_purchase").submit(function(e){
                e.preventDefault();
                var find_exact_purchase = $("#find_exact_purchase");
                var pricesStr = find_exact_purchase.find("input:text[name='prices']").val();
                var budgetStr = find_exact_purchase.find("input:text[name='budget']").val();
                var action_url = "/api/find_exact_purchase";

                var prices = pricesStr.split(",").map(function(num){
                    return parseInt(num);
                });
                var budget = parseInt(budgetStr);

                var data = {prices: prices, budget: budget};
                $.ajax({
                    type: "POST",
                    url: action_url,
                    data: JSON.stringify(data),
                    success: function(data, textStatus, jqXHR){
                        $("#solution").html(formatSolution(data));
                    },
                    dataType:"json"
                })

                //$("#find_exact_purchase").attr("action", action_url);
            });
        });