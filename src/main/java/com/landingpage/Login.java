package com.landingpage;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.time.LocalDateTime;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@WebServlet("/index")
public class Login extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String name="postgres";
		String password="tiger";
		String url="jdbc:postgresql://localhost:5432/loginpage";
	
		try {
			Class.forName("org.postgresql.Driver");
			
			Connection con=DriverManager.getConnection(url,name,password);
			
		
		
			
			
			String email1=req.getParameter("mid");
			String password1=req.getParameter("pass");
					
			
            Statement stmt=con.createStatement();
			
			String query2="select * from shoe";
			
			ResultSet rs=stmt.executeQuery(query2);
			PrintWriter pm=resp.getWriter();
			boolean result=false;
			
			while(rs.next())
			{
				
				String em=rs.getString(2);
				String ep=rs.getString(3);
				
				if(em.equals(email1)&&ep.equals(password1))
				{
				     result=true;
				     break;
				}
			}
			if(result==true)
			{
				resp.sendRedirect("index.html");
			}
			else
			{
				 
				resp.setContentType("text/html");
			    pm.println("<html><body>");
			    pm.println("<script type='text/javascript'>");
			    pm.println("alert('Invalid email or password!');");
			    pm.println("window.location.href = 'signin.html';");
			    pm.println("</script>");
			    pm.println("</body></html>");
				
			}
			
			
			
			con.close();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			 resp.getWriter().println("SQL Error: " + e.getMessage());
			e.printStackTrace();
		}
		
	}

}
