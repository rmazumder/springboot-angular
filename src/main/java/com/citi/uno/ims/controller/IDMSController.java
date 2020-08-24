package com.citi.uno.ims.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RequestMapping("/idms")
@RestController
public class IDMSController {
	

	@RequestMapping("/businessGroup")
	public String[] getBusinessGroupList() {
		
		String[] businessGroup = new String[] {"Administrative","AsiaPac","Banking","CWM","CPB"};
		return businessGroup;
	}
	
	@RequestMapping("/requestTypes")
	public String[] getRequestType() {
		
		String[] requestType = new String[] {"Add New user","Move To Group","Add Policy attribute","Remove Policy Atribute"};
		return requestType;
	}
	
	@RequestMapping("/policies")
	public String[] getPolicy() {
		
		String[] policy = new String[] {"Mexico CIB","UK CMO(EMPLS)","GABON MARKETS","AUSTRALIA BANKING"};
		return policy;
	}
	
	
}
