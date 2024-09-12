



let getFrom() { 
    

return(
<div class="container-fluid mt-5">
    <!-- Form title -->
    <h2 class="mb-4">Stacked Registration Form</h2> 
    
    <!-- Form with two columns -->
    <form class="row">
        <!-- First column -->
        <div class="col-12 col-md-6">
            <label for="inlineFormInputName2" >Name:</label>  
            <input type="text" class="form-control mb-2" id="inlineFormInputName2" >

            <label for="inlineFormInputGroupUsername2">Username:</label>
            <input type="text" class="form-control mb-2" id="inlineFormInputGroupUsername2" >
     
            <label for="inlineFormInputPassword2" >Password:</label>
            <input type="password" class="form-control mb-2" id="inlineFormInputPassword2" >

            <div class="form-check mb-4 mt-3">
                <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                <label class="form-check-label" for="inlineFormCheck">
                    Check Here
                </label>

         <!-- Centered Submit button -->
         <div class="d-flex justify-content-center mt-3">
            <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </div>

        </div>
        
       
    </form>
</div>

})



